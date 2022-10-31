<?php
$transacao;
$devedor = ['a', 'b', 'c', 'd', 'e'];
$credor = ['c', 'a', 'a', 'd', 'a'];
$valor = [4, 1, 3, 2, 3];

for ($i = 0; $I < $tamArrayD; $i++){
    $nome = $devedor[$i];
    $total = 0;
        for($x = 0; $x < $stamArrayD; $i++){
            if ($nome == $devedor[$x]){
                $total -= $valor[$x];
            }
            if ($nome == $credor[$x]){
                $total += $valor[$x];
            }
        }
        $final[$i]['nome']['total'] = [$i][$nome][$total];
}

foreach ($variabel as $key => $value){
    # code...
}
