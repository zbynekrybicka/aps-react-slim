<?php
/**
 * Created by PhpStorm.
 * User: Zbyněk Rybička
 * Date: 08.06.2022
 * Time: 22:39
 */

namespace App\Application\Actions;


use App\Domain\DomainException\DomainRecordNotFoundException;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\Exception\HttpBadRequestException;

class HomepageAction extends Action
{

    /**
     * @throws DomainRecordNotFoundException
     * @throws HttpBadRequestException
     */
    protected function action(): Response
    {
        var_dump(get_class_methods($this->logger));
        //var_dump($this->db->query('show tables')->fetchAll());
        die;
    }
}