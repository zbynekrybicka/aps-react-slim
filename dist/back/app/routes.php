<?php

declare(strict_types=1);

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;

function response($response, $code, $content) {
    $response->withStatus($code)->getBody()->write(json_encode($content));
    return $response;
}

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->add(function ($request, $handler) {
        $response = $handler->handle($request);
        return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    });

    $app->post('/login', function (Request $request, Response $response) {
        $data = $request->getParsedBody();
        
        $user = $this->get("db")->query("select * from users where username = %s", $data["username"])->fetch();
        if (!$user) return response($response, 400, "Uživatel nenalezen");
        if (!password_verify($data["password"], $user["password"])) return response($response, 400, "Chybné heslo");
        return response($response, 200, [
                        "authToken" => Firebase\JWT\JWT::encode(["id" => $user["id"]], $this->get("jwt"), 'HS256'), 
                        "user" => [ "id" => $user["id"], "role" => $user["role"]]]);
    });
    $app->get('/contacts', function (Request $request, Response $response) {
        $data = $request->getQueryParams();
        $user = \Firebase\JWT\JWT::decode($request->getHeaderLine('Authorization'), new \Firebase\JWT\Key($this->get('jwt'), 'HS256'));
        $contacts = $this->get("db")->query("select * from contacts where user_id = %u", $user->id)->fetchAll();
        $response->withStatus(200)->getBody()->write(json_encode($contacts));
        return $response;
    });
};
