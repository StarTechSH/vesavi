<?php

$file = fopen("teste.txt", "r+");

if (!$file) {
    exit("Falha ao abrir o arquivo");
}

fwrite($file, "Teste no inicio do arquivo\n\n");

while (($line = fgets($file)) !== false) {
    echo $line;
}

if (!feof($file)) {
    exit("Falha inesperada do fgets()");
}

fclose($file);
