<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    public $response = array();
    public $response_http_code = 200;
    public $response_headers;

    public $user_id;
    public $request;
    public $json_payload;
    public $method;

    public function __construct()
    {
        $this->request = new Request;
        $this->method = $_SERVER['REQUEST_METHOD'];
        if (strtolower($this->method) == 'post') {
            $this->json_payload = $this->request->json()->all();
        }
    }

    public function output_response($boolean, $message_code = 'DEF001', $data = array())
    {
        if($boolean){
            $response = array(
                "validate" => true,
                "data" => $data,
                "message" => config('message.success.'.$message_code)
            );
        }
        else{
            $response = array(
                "validate" => false,
                "errors" => array(
                    "code" => $message_code,
                    "message" => config('message.user.'.$message_code),
                    "system_message" => config('message.system.'.$message_code)
                )
                
            );
        }

        return $response;
    }

    public function NotFound404()
    {
        return response()->json(array("validate" => false), 404, array("Content-Type" => "text/json") );
    }

}