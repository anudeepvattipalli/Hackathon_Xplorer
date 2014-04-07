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

public partial class Markers : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void register_checkin(object sender, EventArgs e)
    {
        string name1 = name.Text;
        string latitude11 = latitude.Text;
        string longitude11 = longitude.Text;
        string description1 = description.Text;
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["dbString"].ConnectionString);
        //Open the connection
        conn.Open();

        SqlCommand cmd = new SqlCommand("insert into checkin (name,latitude,longitude,description) values('" + name1 + "','" + latitude11 + "','" + longitude11 + "','" + description1 + "')", conn);
        int result = cmd.ExecuteNonQuery();
        Label1.Visible = true;
        if (result != 0)
        {
            Label1.Text = "Successfully updated all checkpoints";
            // Response.Redirect("login.aspx");
        }
        else
        {
            Label1.Text = "Could not update checkpoints :( Try Again !";
        }
        cmd.Dispose();
        conn.Close();
    }

    protected void btnUpload_Click(object sender, EventArgs e)
    {
        if (FileUpload1.PostedFile != null)
        {
            string FileName = Path.GetFileName(FileUpload1.PostedFile.FileName);

            //Save files to disk
            FileUpload1.SaveAs(Server.MapPath("~/image/" + FileName));

            //Add Entry to DataBase
            String strConnString = System.Configuration.ConfigurationManager.ConnectionStrings["dbString"].ConnectionString;
            SqlConnection con = new SqlConnection(strConnString);
            string strQuery = "insert into tblFiles (FileName, FilePath) values(@FileName, @FilePath)";
            SqlCommand cmd = new SqlCommand(strQuery);
            cmd.Parameters.AddWithValue("@FileName", FileName);
            cmd.Parameters.AddWithValue("@FilePath", "~/image/" + FileName);
            cmd.CommandType = CommandType.Text;
            cmd.Connection = con;
            try
            {
                con.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Response.Write(ex.Message);
            }
            finally
            {
                con.Close();
                con.Dispose();
            }
        }
    }
}