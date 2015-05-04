<?php
  //$colonias= array("centro","Las Palmas","Linda Vista","San Pablo");
/*  $colonias[]=array("Id"=>0,"nombre"=>"centro");
  $colonias[]=array("Id"=>1,"nombre"=>"Las Palmas");
  $colonias[]=array("Id"=>2,"nombre"=>"Linda Vista");
  $colonias[]=array("Id"=>3,"nombre"=>"San Pablo");*/

  $colonias=array(array("Id"=>"0","nombre"=>"centro"),
                  array("Id"=>"1","nombre"=>"Las Palmas"),
                  array("Id"=>"2","nombre"=>"Linda Vista"),
                  array("Id"=>"3","nombre"=>"San Pablo"));


  /*echo "<pre>";
  print_r($colonias);
  echo "</pre>";*/

  echo json_encode($colonias);

 ?>
