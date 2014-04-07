using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;

public partial class Route : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
       
    }
    protected void btnUpload_Click(object sender, EventArgs e)
    {
        
    }
    protected void register_route(object sender, EventArgs e)
    {
        string name1 = name.Text;
        string description1 = description.Text;
        string imagelink1 = image.Text;
        string maplink1 = map.Text;

        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbString"].ConnectionString);
        //Open the connection
        conn.Open();

        SqlCommand cmd = new SqlCommand("insert into routemap (routename,description,imageurl,mapurl) values('" + name1 + "','" + description1 + "','" + imagelink1 + "','" + maplink1 + "')", conn);
        int result = cmd.ExecuteNonQuery();
        Label1.Visible = true;
        if (result != 0)
        {
            Label1.Text = "Successfully created a route";
            // Response.Redirect("login.aspx");
        }
        else
        {
            Label1.Text = "Could not create a route :( Try Again !";
        }
        cmd.Dispose();
        conn.Close();
    }
}