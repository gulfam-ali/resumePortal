<?php

namespace App\Models;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{
    public function __construct()
    { 

    }
    
    public function get_user_data($email)
    {
        return DB::table('users')->where('email', $email)->first();
    }

    public function insert_user_record($data)
    {
        $data = (object)$data;
        $insert = array(
            'full_name' => $data->fullName,
            'email' =>  $data->email,
            'password' => $data->password,
            'created_date' => date('Y-m-d H:i:s')
        );
        try{
            DB::table('users')->insert($insert);
            return true;
        }
        catch(Exception $e)
        {
            return false;
        }
    }
    
}