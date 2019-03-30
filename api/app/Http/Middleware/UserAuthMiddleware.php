<?php 
namespace App\Http\Middleware;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Closure;
class UserAuthMiddleware
{
    /**
     * Run the request filter.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $headers = array_change_key_case(apache_request_headers());
        if( !isset($headers['authorization']) )
        {
            $error_code = 'ACC007';
            $response = array(
                "validate" => false,
                "errors" => array(
                    "code" => $error_code,
                    "message" => config('message.user.'.$error_code),
                    "system_message" => config('message.system.'.$error_code)
                )
                
            );
            return response()->json($response, '401', array("Content-Type" => "text/json") );
        }
        else{
            
            $temp = explode(':', base64_decode($headers['authorization']));
            
        }
        return $next($request);
    }
}