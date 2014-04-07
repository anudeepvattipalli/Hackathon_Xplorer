using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
            


                //Declare Connection by passing the connection string from the web config file
                SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbString"].ConnectionString);
                //Open the connection
                conn.Open();
                //Declare the sql command

                string v1 = "";
                v1 = Request.QueryString["name"];
                Session["store"] = v1;

                SqlCommand cmd1 = new SqlCommand("select * from routemap where routename='" + v1 + "'", conn);
                SqlDataReader reader = cmd1.ExecuteReader();
                
                while (reader.Read())
                {
                    name.Text = reader["routename"].ToString();
                    description.Text = reader["description"].ToString();
                    image.Text = reader["imageurl"].ToString();
                    mapurl.Text = reader["mapurl"].ToString();
                    
                }
                Session["image"] = image.Text;
                gimg.Text = "<a class='details' data-fancybox-type='iframe' href='" + mapurl.Text + "'><img src='image/google-map.jpg'></a>";

                facebook.Text = "<a class='details' data-fancybox-type='iframe' href='https://www.facebook.com/sharer.php?u=" + mapurl + "'><img src='image/f_share.jpg'></a>";
                conn.Close();


                DataTable dt = new DataTable();
                String strConnString = System.Configuration.ConfigurationManager.ConnectionStrings["dbString"].ConnectionString;
                string strQuery = "select * from tblFiles order by ID";
                SqlCommand cmd = new SqlCommand(strQuery);
                SqlConnection con = new SqlConnection(strConnString);
                SqlDataAdapter sda = new SqlDataAdapter();
                cmd.CommandType = CommandType.Text;
                cmd.Connection = con;
                try
                {
                    con.Open();
                    sda.SelectCommand = cmd;
                    sda.Fill(dt);
                    GridView1.DataSource = dt;
                    GridView1.DataBind();
                }
                catch (Exception ex)
                {
                    Response.Write(ex.Message);
                }
                finally
                {
                    con.Close();
                    sda.Dispose();
                    con.Dispose();
                } 
        
    }

    protected void on_click(object sender, EventArgs e)
    {
        Response.Redirect("checkinMarkers.aspx");
    }
           
    }
