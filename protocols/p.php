<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Jinlab protocols</title>

    <!-- Bootstrap core CSS -->
    <link href="../bootstrap-4.0.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="offcanvas.css" rel="stylesheet">
  </head>

  <body class="bg-light">

<!--    <div class="nav-scroller fixed-top bg-white box-shadow">--!>
      <nav class="nav nav-underline fixed-top bg-white">
        <a class="nav-link active" href="#">Protocols</a>
   <!--     <a class="nav-link" href="#">
          Friends
          <span class="badge badge-pill bg-light align-text-bottom">27</span>
        </a>
  --!>
        <a class="nav-link" href="upload.php">Upload</a>
        <a class="nav-link" href="#attentions">Attentions(MUST READ!)</a>
        <a class="nav-link" href="../">Home</a>
<!--        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>--!>
      </nav>
<!--    </div>--!>

    <main role="main" class="container">
<!--
      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
        <img class="mr-3" src="https://getbootstrap.com/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">
        <div class="lh-100">
          <h6 class="mb-0 text-white lh-100">Bootstrap</h6>
          <small>Since 2011</small>
        </div>
      </div>
--!>

<!--      <div class="my-3 p-3 bg-white rounded box-shadow">--!>
<!--        <h4 class="border-bottom border-gray pb-2 mb-0">Recent updates</h4>--!>

<?php
function get_allfiles($path,&$files) {  
    if(is_dir($path)){  
        $dp = dir($path);  
        while ($file = $dp ->read()){  
            if($file !="." && $file !=".."){  
                get_allfiles($path."/".$file, $files);  
            }  
        }  
        $dp ->close();  
    }  
    if(is_file($path)){  
        $files[] =  $path;  
    }  
}  
     
function get_filenamesbydir($dir){  
    $files =  array();  
    get_allfiles($dir,$files);  
    return $files;  
}  

function listdir($dir){ 
 if ($handle = opendir($dir)){ 
 $output = array(); 
 while (false !== ($item = readdir($handle))){ 
 if (is_dir($dir.'/'.$item) and $item != "." and $item != ".."){ 
 $output[] = $dir.'/'.$item; 
 $output = array_merge($output, ListDescendantDirectories($dir.'/'.$item)); 
 } 
 } 
 closedir($handle); 
 return $output; 
 }else{ 
 return false; 
 } 
}
function ListDescendantDirectories($dir) 
{ 
 if ($handle = opendir($dir)) 
 { 
 $output = array(); 
 while (false !== ($item = readdir($handle))) 
 { 
 if (is_dir($dir.'/'.$item) and $item != "." and $item != "..") 
 { 
 $output[] = $dir.'/'.$item; 
 $output = array_merge($output, ListDescendantDirectories($dir.'/'.$item)); 
 } 
 } 
 closedir($handle); 
 return $output; 
 } 
 else 
 { 
 return false; 
 } 
} 
//调用，取目录中的所有子目录，循环遍历。
$dirs = listdir('files');
foreach($dirs as $dir){
    echo '<div class="my-3 p-3 bg-white rounded box-shadow">';
    echo '<h5 class="border-bottom border-gray pb-2 mb-0">' .substr($dir,6). '</h5>';
    $filenames = get_filenamesbydir($dir);
    foreach ($filenames as $value) {
        echo '<div class="media text-muted pt-3"><p class="media-body pb-1 mb-0 small lh-100 border-bottom border-gray"><strong class="d-block text-gray-dark">';
//    echo substr($value,6);
        echo '<a class="nav-link" href="' .$value. '">' .explode("/",substr($value,6),3)[1]. '</a>';
        echo '</strong></p></div>';
    }
    echo '</div>';

}
 
//$filenames = get_filenamesbydir("files");
//打印所有文件名，包括路径  
//foreach ($filenames as $value) {  
//    echo '<div class="media text-muted pt-3"><p class="media-body pb-1 mb-0 small lh-100 border-bottom border-gray"><strong class="d-block text-gray-dark">';
//    echo substr($value,6);
//    echo '<a class="nav-link" href="' .$value. '">' .substr($value,6). '</a>';
//    echo '</strong></p></div>';

//}  
?>

<!--
        <div class="media text-muted pt-3">
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">@username</strong>
          </p>
        </div>
        <div class="media text-muted pt-3">
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">@username</strong>
          </p>
        </div>
        <div class="media text-muted pt-3">
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">@username</strong>
          </p>
        </div>
--!>
        <small class="d-block text-right mt-3">
          <a href="#">Top↑</a>
        </small>
      </div>

      <div id="attentions" class="my-3 p-3 bg-white rounded box-shadow">
        <h5 name="attentions" class="border-bottom border-gray pb-2 mb-0">Attentions</h5>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <span class="d-block">1.所有资料Jinlab所有，若无允许，禁止随意传播。</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <span class="d-block">2.如果你想上传自己的文件，请点击左上角的<a href="upload.php">upload</a>。</span>
          </div>
        </div>
        <div class="media text-muted pt-3">
          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <span class="d-block">3.上传文件大小不应超过8M，文件上传后无法改名，无法删除，请注意。</span>
          </div>
        </div>
        <small class="d-block text-right mt-3">
          <a href="#">All suggestions</a>
        </small>
      </div>
    </main>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../bootstrap-4.0.0/assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
    <script src="../bootstrap-4.0.0/assets/js/vendor/popper.min.js"></script>
    <script src="../bootstrap-4.0.0/dist/js/bootstrap.min.js"></script>
    <script src="../bootstrap-4.0.0/assets/js/vendor/holder.min.js"></script>
    <script src="offcanvas.js"></script>
  </body>
</html>
