<%@ Page Title="" Language="C#" MasterPageFile="~/master1.master" AutoEventWireup="true" CodeFile="routedisplay.aspx.cs" Inherits="_Default" %>

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

    
    <script src="http://static.ak.fbcdn.net/connect.php/js/FB.Share" type="text/javascript"></script>
<script src="http://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php"
           type="text/javascript">
</script>


    <style type="text/css">
    .anudeep {
            float : left;
   display : inline;
   display : block;
   text-align: left;
   color:aqua;
   top:1000px;
        }
    .GridView1 tr th tbody table td {
        position: absolute;
        float:right;
        top:284px;
        right:150px;
    }
    #GridView1  {
        position: absolute;
        float:right;
        top:284px;
        right:150px;
    }
    .GridPager {
        position: absolute;
        float:right;
        top:284px;
        right:150px;
    }
        </style>

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>

<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css?v=2.1.3" type="text/css" media="screen" />
<script type="text/javascript" src="fancybox/source/jquery.fancybox.pack.js?v=2.1.3"></script>

<link rel="stylesheet" href="fancybox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5" type="text/css" media="screen" />
<script type="text/javascript" src="fancybox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5"></script>
<script type="text/javascript" src="/fancybox/source/helpers/jquery.fancybox-media.js?v=1.0.5"></script>

<link rel="stylesheet" href="fancybox/source/helpers/jquery.fancybox-thumbs.css?v=1.0.7" type="text/css" media="screen" />
<script type="text/javascript" src="fancybox/source/helpers/jquery.fancybox-thumbs.js?v=1.0.7"></script>




<script type="text/javascript">
    $(".details").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
    });

    $(".email").fancybox({
        maxWidth: 750,
        maxHeight: 600,
        fitToView: false,
        width: '60%',
        height: '60%',
        autoSize: false,
        closeClick: false,
        openEffect: 'elastic',
        closeEffect: 'elastic'
    });

</script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h2>Route information</h2> 
    <form runat="server">
					    	<div id="user_profile">

    <br />
                                   
         <br class="clear" />
        <ul>
            <li>
          <label runat="server" font-names="Tahoma" style="color: red">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <asp:Label ID="name" runat="server" Text="Label" position="absolute"  Font-Names="Lucida Sans" Height="50px" Width="500px" ForeColor="black"></asp:Label>
        </li>
        
        <li>
        <label runat="server" font-names="Tahoma" style="color: red" >Description:&nbsp;&nbsp;&nbsp;</label>
        <asp:Label ID="description" runat="server" Text="Label" Font-Names="Lucida Sans"  Height="56px" Width="500px" ForeColor="black"></asp:Label>
        </li>
        
        <li>
       <label runat="server" font-names="Tahoma" style="color: red">Map URL :&nbsp;&nbsp;&nbsp;</label>
        <asp:Label ID="mapurl" runat="server" Text="Label" Font-Names="Lucida Sans" Height="61px" Width="500px" ForeColor="black"></asp:Label>
        </li>
        
                    <li>
       <label runat="server" font-names="Tahoma" style="color: red">Image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <asp:Label ID="image" runat="server" Text="Label" Font-Names="Lucida Sans" Height="66px" Width="500px" ForeColor="black"></asp:Label>
        </li>
            <li>
       <label runat="server" font-names="Tahoma" style="color: red">Click here to check the route:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br />
                <asp:Label ID="gimg" runat="server" Text="Label" Font-Names="Lucida Sans" Height="66px" Width="500px" ForeColor="black"></asp:Label>
        </li>
             <li>
       <label runat="server" font-names="Tahoma" style="color: red">Click here to share route on facebook:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <br />
                <asp:Label ID="facebook" runat="server" Text="Label" Font-Names="Lucida Sans" Height="66px" Width="500px" ForeColor="black"></asp:Label>
        </li>
           
            

        <asp:Button ID="Done" runat="server"   onclick="on_click" cssclass="hello" Text="Start here" />
        <br /><br />
        <br />
      </ul>

                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns = "false" Font-Names = "Arial" cssclass="GridView1" PagerStyle-HorizontalAlign="Right" PagerStyle-VerticalAlign="Middle">

            <Columns>
                <asp:ImageField DataImageUrlField = "FilePath" ControlStyle-Width = "100" ControlStyle-Height = "100" HeaderText = "Route Images" />
            </Columns> 
                    <PagerStyle HorizontalAlign = "Right" CssClass = "GridPager" />
        </asp:GridView>
            
          

    </div>
					    </form>       
</asp:Content>

