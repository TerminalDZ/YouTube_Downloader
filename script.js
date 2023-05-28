function updateCard() {
      var link = document.getElementById("linkInput").value;
      var iframeCode = '<iframe style="width:800px;height:250px;border:0;overflow:hidden;" scrolling="no" ' +
        'src="https://loader.to/api/card/?url=' + encodeURIComponent(link) + '"></iframe>';
      document.getElementById("cardContainer").innerHTML = iframeCode;
    }