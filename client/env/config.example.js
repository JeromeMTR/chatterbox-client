// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rfp';
