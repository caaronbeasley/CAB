$(document).ready(function() {

  addlinkhrefs();
  opening();
  $('a.externallink, a.internallink, a.footnoteexternallink').attr('target', '_blank');
  pagetitle();
  subjectline();
  getAge();
});


function opening() {
//this is the bit of code that makes the whole opening and closing text thing work.
  $('a[data-o]').click(function(e) {

    //this line just stops it visiting the href which is always #
    e.preventDefault();

    var openedby = $(this).attr('data-o');
    $('[data-ob="' + openedby +'"]').removeClass('off').addClass('on');

    var closedby = $(this).attr('data-c');
    $('[data-cb="' + closedby +'"]').remove();

    $(this).contents().unwrap();

    linkcount();

  });
}


function linkcount() {
//this does nothing, just ignore it, don't worry about it. It counts the links you have left, that's all.

  var availablelinks = $("a:visible").not(".externallink").not(".internallink").not("footnoteexternallink").length;
  if (availablelinks == 0) {
    setTimeout(
      function() {
        console.log('Finished');
        $('#nothing').css('display','inline');
    }, 1500);

  }
}

function pagetitle() {
//randomises the page title from a small handful of uninteresting options

	var pagetitles = [""];
	var pickpagetitle = Math.floor(Math.random()*pagetitles.length);

	$(document).attr('title', pagetitles[pickpagetitle]);

}

function subjectline() {
  //the same as the page title one, only this is possible email subject lines if you make the mistake of trying to email me.

	var emailsubjects = [""];

	var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);

	$('a[href="mailto:"]').attr("href", "mailto:?subject=" + emailsubjects[pickemailsubject]);

}

function addlinkhrefs() {
  //this is so I didn't have to code them in, but so you can still tab around the opening links if you want. I'm not actually sure if I want people to be able to tab through them, but i suppose it's useful while I work?
  $('a').not(".internallink").not(".externallink").not(".footnoteexternallink").attr("href","#");

}

function getAge() {
  var dob = "1982-05-28"
  dob = new Date(dob);
  var today = new Date();
  var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
  $('#age').text(age);
}