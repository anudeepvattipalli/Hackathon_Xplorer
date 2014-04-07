<%@ Page Title="" Language="C#" MasterPageFile="~/master1.master" AutoEventWireup="true" CodeFile="createRoute.aspx.cs" Inherits="Route" %>

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
    <style>
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
  
        .label{
        float : left;
        left:50px;
   display : inline;
   display : block ;
   text-align: left;
   color:darkviolet;
   

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
        <div id="Route_Creation">
           <h2>Route Creation</h2>
         <br />
            
            <form runat="server">
        <asp:Label ID="Label1" runat="server" Text="Route Creation" Visible="False" Font-Bold="True" Font-Names="tahoma" Font-Size="Medium" ForeColor="#009933"></asp:Label>
       
       			<asp:Label ID="label2" runat="server" cssclass="label" Text="Name of the Route" AssociatedControlID="Name" />
<asp:TextBox id="name" cssclass="textbox" runat="server" />
<br /><br />
<asp:Label ID="label3" runat="server" cssclass="label" Text="Description" AssociatedControlID="Description" />
<asp:TextBox id="description" cssclass="textbox"  runat="server" />
<br />
        <br />
        <asp:Label ID="label4" runat="server" cssclass="label" Text="Route Image URL" AssociatedControlID="Image" />
<asp:TextBox id="image" cssclass="textbox" runat="server" />
<br /><br /> 
        <asp:Label ID="label5" runat="server" cssclass="label" Text="Route Map URL" AssociatedControlID="Map" />
<asp:TextBox id="map" cssclass="textbox" runat="server" />
<br /><br />
  
            
             <asp:Button ID="Done" runat="server" onclick="register_route" cssclass="hello" Text="Done" />
        <br /><br />
                
    </form>
                </div>
    

</asp:Content>

