document.addEventListener('DOMContentLoaded', function() {
    initializeCloseButtons();
    addClickEventListenerToList();

    function initializeCloseButtons() {
        var items = document.getElementsByTagName("LI");
        for (var i = 0; i < items.length; i++) {
            createCloseButton(items[i]);
        }

        var closeButtons = document.getElementsByClassName("close");
        for (var i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = function() {
                var item = this.parentElement;
                item.style.display = "none";
            };
        }
    }

    function createCloseButton(item) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        item.appendChild(span);
    }

    function addClickEventListenerToList() {
        var list = document.querySelector('ul');
        list.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked');
            }
        }, false);
    }

    window.addNewElement = function() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var text = document.createTextNode(inputValue);
        li.appendChild(text);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
            createCloseButton(li);
            document.getElementById("myInput").value = "";

            var closeButtons = document.getElementsByClassName("close");
            for (var i = 0; i < closeButtons.length; i++) {
                closeButtons[i].onclick = function() {
                    var item = this.parentElement;
                    item.style.display = "none";
                };
            }
        }
    };
});
