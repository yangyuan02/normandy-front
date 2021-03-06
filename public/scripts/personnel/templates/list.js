module.exports = `
<dt>
    <span class="personnel_name">姓名</span>
    <span class="personnel_phone">手机号</span>
    <span class="personnel_auth">认证</span>
    <span class="personnel_time">创建时间</span>
    <span class="personnel_role">角色</span>
    <span class="user_status">状态</span>
    <span>操作</span>
</dt>
<% if(list && list.length){%>
<% list.forEach(function(item){%>
<dd>
    <span class="personnel_name"><%-item.user.name%></span>
    <span class="personnel_phone"><%-item.user.mobile%></span>
    <div class="personnel_auth">
      <i class="ico1"></i>
      <i class="ico2"></i>
      <i class="ico3"></i>
    </div>
    <span class="personnel_time"><%-item.user.created_at%></span>
    <div class="list_status">
        <%if(item.roles && item.roles.length){%>
        <% item.roles.forEach(function(item){%>
        <span class="list_btn"><%-item.name%></span>
        <%})%>
        <%}else{%>
        <span class="list_btn3">未设置</span>
        <%}%>
    </div>
    <div class="user_status">
        <%if (item.status == 0) {%>
        <span>待激活</span>
        <%} else if(item.status == 1){%>
        <span class="usable_btn">可用</span>
        <%} else if(item.status == 2){%>
        <span class="disable_btn">不可用</span>
        <%}%>

    </div>
    <div class="personnel_action">
        <a class="list_action" @click="isDisabled(<%-item.status%>,<%-item.user.id%>)" href="javascript:;">
          <%if(item.status===1 || item.status==0){%>禁用<%}else if(item.status===2){%>启用<%}%></a>
        <a class="list_action js_authEdit" data-id="<%-item.user.id%>"  href="javascript:;"> / 编辑角色 </a>
       <%if(item.status == 0){%> <a class="list_action js_message" data-id="<%-item.user.id%>"  href="javascript:;"> / 重新发送 </a><%}%>
    </div>
</dd>
<%})%>
<%}%>`;