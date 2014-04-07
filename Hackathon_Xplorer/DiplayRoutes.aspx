<%@ Page Title="" Language="C#" MasterPageFile="~/master1.master" AutoEventWireup="true" CodeFile="DiplayRoutes.aspx.cs" Inherits="DiplayRoutes" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    
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
    <div id="mainpage" style="height:400px;">
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
                            <h3><a href="DiplayRoutes.aspx"> Trace A Route</a></h3>
                            <p></p>
                        </li>
                        <li>
                            <h3>Walk Through The Route</h3>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>

    <asp:Repeater ID="venmenu" runat="server">
              <HeaderTemplate>
           
           
            </HeaderTemplate>
            
            <ItemTemplate>
                <br />
 <a style="font-size:18px; color:red;" href="routedisplay.aspx?name=<%#DataBinder.Eval(Container.DataItem, "routename")%>"><%#DataBinder.Eval(Container.DataItem, "routename")%></a>
                <br />
                <br />
            </ItemTemplate>
            <SeparatorTemplate>
                  
            </SeparatorTemplate>
            <FooterTemplate>
            
            </FooterTemplate>
       
    </asp:Repeater>

        </div>
</asp:Content>

