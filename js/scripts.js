$("a[data-link='team']").on('click', function(e){
  e.preventDefault();
  
  $("#nav-root").transition({
    'x': -100
  });
  
  $("#team-menu").transition({
    'x':  -100,
    'opacity': 1
  });
  
  $("#back").on('click', function() {
    $("#nav-root").transition({
      'x': 0
    });
    
    $("#team-menu").transition({
      'x': 0,
      'opacity': 0
    });
  });
});

$("a[data-link='project']").on('click', function(e){
  e.preventDefault();

  $("#team-menu").fadeToggle();
  
  $("#nav-root").transition({
    'left': -100
  });
  
  $("#project-menu").transition({
    'x':  -100,
    'opacity': 1
  });
  
  $("#back").on('click', function() {
    $("#nav-root").transition({
      'x': 0
    });
    
    $("#project-menu").transition({
      'opacity': 0,
      'x': 0
    });
  });
});