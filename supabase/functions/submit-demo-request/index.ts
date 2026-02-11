import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DemoRequestPayload {
  fullName: string;
  companyEmail: string;
  phoneNumber: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { fullName, companyEmail, phoneNumber }: DemoRequestPayload = await req.json();

    if (!fullName || !companyEmail || !phoneNumber) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const sendyFormData = new URLSearchParams();
    sendyFormData.append("name", fullName);
    sendyFormData.append("email", companyEmail);
    sendyFormData.append("Phone_Number", phoneNumber);
    sendyFormData.append("list", "Swp1LXRsIYwvp9JJTjvysw");
    sendyFormData.append("subform", "yes");
    sendyFormData.append("hp", "");

    let sendyStatus = "pending";
    let sendyResponse = "";

    try {
      const sendyResult = await fetch("https://emails.lla.in/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: sendyFormData.toString(),
      });

      sendyResponse = await sendyResult.text();
      sendyStatus = sendyResult.ok ? "success" : "failed";
    } catch (sendyError) {
      console.error("Sendy submission error:", sendyError);
      sendyStatus = "failed";
      sendyResponse = sendyError instanceof Error ? sendyError.message : "Unknown error";
    }

    const { error: dbError } = await supabase
      .from("form_submissions")
      .insert({
        name: fullName,
        email: companyEmail,
        phone_number: phoneNumber,
        sendy_status: sendyStatus,
        sendy_response: sendyResponse,
      });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    if (sendyStatus === "success") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Demo request submitted successfully"
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to submit to Sendy",
          message: "We've saved your request and will contact you soon."
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
