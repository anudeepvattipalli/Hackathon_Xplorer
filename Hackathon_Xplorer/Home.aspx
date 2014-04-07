<%@ Page Title="" Language="C#" MasterPageFile="~/master1.master" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="test1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <script type="text/javascript" src="//scribblemaps.com/api/js/"></script>

    <script type="text/javascript">
        window.onload = function () {
            var sm = new ScribbleMap(document.getElementById('ScribbleMap'));
        }
    </script>
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
                            <h3><a href="DiplayRoutes.aspx"> A Route</h3>
                            <p></p>
                        </li>
                        <li>
                            <h3>Walk Through The Route</h3>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
</asp:Content>

