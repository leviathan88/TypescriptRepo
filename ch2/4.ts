//generics
function getEntities<T>(url : string, cb : (list : T[]) => void) : void {
  $.ajax({
    url: url,
    method: "GET",
    success: function(data) {
       cb(data.items);
    },
    error : function(error) {
      cb(null);
    }
  });
}

getEntities<User>("/api/users",function(users : Users[]) {
  for(var i; users.length; i++) {
    console.log(users[i].name);
  }
});

getEntities<Order>("/api/orders", function(orders : Orders[]) {
  for(var i; orders.length; i++) {
    console.log(orders[i].total);
  }
});
