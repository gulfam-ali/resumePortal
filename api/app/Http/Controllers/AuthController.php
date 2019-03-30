<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use App\Models\Auth;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public $auth_model;

    public function __construct()
    {
        parent::__construct();
        $this->auth_model = new Auth();
    }

    public function login()
    {
        $user_data = $this->auth_model->get_user_data($this->json_payload['email']);

        if(count($user_data) > 0)
        {
            if($user_data->password == $this->json_payload['password'])
            {
                $data = array(
                    'user_data' => $user_data,
                    'token' => bin2hex(openssl_random_pseudo_bytes(8))
                );
                $this->response = $this->output_response(true, "SC0001", $data);
                return response()->json($this->response, 200, array("Content-Type" => "text/json") );
            }
            else{
                $this->response = $this->output_response(false, "RM0002");
                return response()->json($this->response, '404', array("Content-Type" => "text/json") );
            }
        }
        else{
            $this->response = $this->output_response(false, "RM0001");
            return response()->json($this->response, '404', array("Content-Type" => "text/json") );
        }
    }

    public function register()
    {
        $check = $this->auth_model->insert_user_record($this->json_payload);

        if($check)
        {
            return response()->json(array('validate'=>true), 200, array("Content-Type" => "text/json") );
        }
        else{
            $this->response = $this->output_response(false, "DEF001");
            return response()->json($this->response, '404', array("Content-Type" => "text/json") );
        }
    }
}
