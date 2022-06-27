<?php
/**
 * Created by PhpStorm.
 * User: Zbyněk Rybička
 * Date: 06.06.2022
 * Time: 13:52
 */
use Latte\Engine as Latte;

require __DIR__ . '/vendor/autoload.php';

if (!array_key_exists(1, $_SERVER['argv'])) {
    die('Schází požadovaný parametr');
}
$project = $_SERVER['argv'][1];
$filename = __DIR__ . '/source/' . $project . '.json';

if (!file_exists($filename)) {
    die('Soubor neexistuje');
}

$data = json_decode(file_get_contents($filename));

$latte = new Latte;
$latte->setTempDirectory(__DIR__ . '/temp');

foreach ($data as $class) {
    $import = [ 'Base' => 1 ];
    foreach ($class->steps as $step) {
        $import[$step->return] = 1;
    }
    $class->import = array_keys($import);
    $result  = $latte->renderToString(__DIR__ . '/template.latte', $class);
    file_put_contents(__DIR__ . '/dist/' . $class->name . '.php', $result);
}