// This code runs when the page loads
$(function() {

  $("#button1").on("click", function(event){
    event.preventDefault()
    //window.alert("Time to remove!!!")     //use as a checking tool
    $("#list-1").remove()
    $("#button1").remove()


    //var elementClicked = $(this)       //$(this) refers to the thumbnail that was clicked.
    //elementClicked.parent().remove()   //removes parent link (not h1 but the div line)

  })

  $("#button2").on("click", function(event){
    event.preventDefault()
    //window.alert("Time to remove!!!")     //use as a checking tool
    $("#list-2").remove()
    $("#button2").remove()


    //var elementClicked = $(this)       //$(this) refers to the thumbnail that was clicked.
    //elementClicked.parent().remove()   //removes parent link (not h1 but the div line)

  })

  $("#button3").on("click", function(event){
    event.preventDefault()
    //window.alert("Time to remove!!!")     //use as a checking tool
    $("#list-3").remove()
    $("#button3").remove()


    //var elementClicked = $(this)       //$(this) refers to the thumbnail that was clicked.
    //elementClicked.parent().remove()   //removes parent link (not h1 but the div line)

  })

  $("#button4").on("click", function(event){
    event.preventDefault()
    //window.alert("Time to remove!!!")     //use as a checking tool
    $("#list-4").remove()
    $("#button4").remove()


    //var elementClicked = $(this)       //$(this) refers to the thumbnail that was clicked.
    //elementClicked.parent().remove()   //removes parent link (not h1 but the div line)

  })
})
