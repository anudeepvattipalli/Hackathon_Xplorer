<%@ Page Title="" Language="C#" MasterPageFile="~/master1.master" AutoEventWireup="true" CodeFile="checkinMarkers.aspx.cs" Inherits="Markers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script type="text/javascript" src="//scribblemaps.com/api/js/"></script>

    <script type="text/javascript">
        window.onload = function () {
            var sm = new ScribbleMap(document.getElementById('ScribbleMap'));
        }
    </script>
    <script type="text/javascript">
        $("a.box-toggle").on('click', function () {
            $('div.box-content').slideToggle(200).toggleClass('active');
        });
    </script>
    <style type="text/css">
        #edit_user {
            position: absolute;
            top: 93px;
            z-index: 9999;
            left: -50px;
            height: 389px;
            width: 1080px;
            margin:14px 50px;
            background-color:black;
            border:1px solid black;
            opacity:0.7;
            filter:alpha(opacity=70);
        }
        .label{
        float : left;
   display : inline;
   display : block;
   text-align: left;
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
        
        .textbox{
	font-family: 'Open Sans', sans-serif;
	margin-top: 5px;
	display: block;
	width: 30%;
	background: rgba(255, 255, 255, 1);
       position:absolute;
       left:350px;
	outline: none;
	color: black;
	font-size: 1em;
	border: groove
	-webkit-appearance: none;
    border-style:solid;
    border-width: 3px;
    border-color: grey;
}
        ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font: 16px arial-black;
    display: block !important;
    display: inline;
    overflow: hidden;
}
  .label{
        float : left;
   display : inline;
   display : block;
   text-align: left;
   font-family:Tahoma;
   font-weight:bold;
   font-size:medium;
  
}
        .hello{
	margin-top: 10px;
	font-family: 'Open Sans', sans-serif;
	cursor: pointer;
	background: brown;
	border: 1px solid #242424;
	padding: 2px 24px;
	outline: none;
	color: #ffffff;
	font-size: 1em;
	text-transform: uppercase;
	-webkit-appearance: none;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	border-radius: 2px;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	-o-border-radius: 2px;
    left: 250px;
}
 .hello:hover {
	background: #f53300;
	border: 1px solid #f53300;
}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div id="ScribbleMap" style="width: 700px; height: 500px;"></div>
     <div id="sidebar">
                <div id="sbox1">
                    <h2>Play with maps</h2>
                    <ul class="list-style1">
                        <li class="first">
                            <h3><a href="createRoute.aspx">Create a Route</a></h3>
                            <p></p>
                        </li>
                        <li class="first">
                            <h3><a href="checkinMarkers.aspx">Checkin Places</a></h3>
                        </li>
                        <li>
                            <h3><a href="DiplayRoutes.aspx"> Trace A Route </a></h3>
                            <p></p>
                        </li>
                        <li>
                            <h3>Walk Through The Route</h3>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
    
            <form runat="server">
        <asp:Label ID="Label1" runat="server" Text="Route Creation" Visible="False" Font-Bold="True" Font-Names="tahoma" Font-Size="Medium" ForeColor="#009933"></asp:Label>
       
       <asp:Label ID="Label2" runat="server" Text="Route Creation" Visible="False" Font-Bold="True" Font-Names="tahoma" Font-Size="Medium" ForeColor="#009933"></asp:Label>
       <br /> <br />
       			<asp:Label ID="label3" runat="server" cssclass="label" Text="Name of the Route" AssociatedControlID="Name" />
<asp:TextBox id="name" cssclass="textbox" runat="server" />
<br /><br />
<asp:Label ID="label4" runat="server" cssclass="label" Text="Description" AssociatedControlID="Description" />
<asp:TextBox id="description" cssclass="textbox"  runat="server" />
<br />
        <br />
        <asp:Label ID="label5" runat="server" cssclass="label" Text="Latitude" AssociatedControlID="latitude" />
<asp:TextBox id="latitude" cssclass="textbox" runat="server" />
<br /><br /> 
        <asp:Label ID="label6" runat="server" cssclass="label" Text="Longitude" AssociatedControlID="longitude" />
<asp:TextBox id="longitude" cssclass="textbox" runat="server" />
<br /><br />
  
            
        <asp:Button ID="Done" runat="server" onclick="register_checkin"  cssclass="hello" Text="Check in" />
             
        <br />
            
                <div>
        <asp:FileUpload ID="FileUpload1" runat="server"/>
        <asp:Button ID="btnUpload" runat="server" Text="Upload" OnClick="btnUpload_Click" />
    </div>
    <hr />
    <div>
    <br />
        
        </div>
                
    </form>
                </div>
   

</asp:Content>

