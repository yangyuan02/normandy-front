module.exports =`

<% if(data && data.results.length){%>
	<li><a  class="js_page" href="<%-pathName%>?page=1">首页</a></li>
	<%if(!isFirstPage){%>
	<li><a class="js_page" href="<%-pathName%>?page=<%-page-1%>">上一页</a></li>
	<%}%>

	<% for(var i = 1; i <= showPage; i++) { %>
	<% if (iPage + i <= totalPage){ %>

	<li <%if(page == (iPage + i)){%>class="active"<%}%>><a class="js_page" href="<%-pathName%>?page=<%-iPage+i%>"><%-iPage + i%></a></li>
	<%}%>
	<%}%>
	<%if(!isLastPage){%>
	<li><a class="js_page" href="<%-pathName%>?page=<%-page +1 %>">下一页</a></li>
	<%}%>
	<li><a class="js_page" href="<%-pathName%>?page=<%-totalPage%>">尾页</a></li>
<%}%>
`;