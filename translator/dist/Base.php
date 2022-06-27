<?php
/**
 * Created by PhpStorm.
 * User: Zbyněk Rybička
 * Date: 06.06.2022
 * Time: 14:22
 */
namespace Julie;

require_once __DIR__ . '/../vendor/autoload.php';

use Latte\Engine as Latte;

class Base
{

    protected static $data;

    public function export()
    {
        file_put_contents(__DIR__ . '/data.json', json_encode(self::$data, JSON_PRETTY_PRINT));
        $template = new Latte();
        foreach (self::$data['components'] as $component) {
            $name = $component['name'];
            $filename = __DIR__ . '/../../dist/front/src/components/' . $name . '.js';
            $fileContent = $template->renderToString(__DIR__ . '/../templates/component.latte', $component);
            file_put_contents($filename, $fileContent);
        }

        $initialState = new \Adbar\Dot;
        foreach (self::$data['state'] as $value) {
            $state = preg_replace('/[\[ ].*/', '', $value[0]);
            $initialState->add($state, $value[1]);
        }
        $filename = __DIR__ . '/../../dist/front/src/slice.js';
        $fileContent = $template->renderToString(__DIR__ . '/../templates/slice.latte', [
            'initialState' => $initialState,
            'reducers' => self::$data['reducers']
        ]);
        file_put_contents($filename, $fileContent);

        foreach (self::$data['actions'] as $name => $action) {
            $filename = __DIR__ . '/../../dist/front/src/actions/' . $name . '.js';
            $fileContent = $template->renderToString(__DIR__ . '/../templates/ajax.latte', $action);
            file_put_contents($filename, $fileContent);
        }
        $filename = __DIR__ . '/../../dist/back/app/routes.php';
        $fileContent = $template->renderToString(__DIR__ . '/../templates/routes.latte', ['actions' => self::$data['actions']]);
        file_put_contents($filename, $fileContent);
    }

}