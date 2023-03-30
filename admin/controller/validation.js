function Validation () {
    this.checkEmpty = function (valueInput,spanID,message) {
        if (valueInput == '') {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = message;
            return false
        }
        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = '';
        return true
    }

    this.checkPrime = function (valueInput,spanID,message) {
        var pattern = /^[0-9]+$/;
        if (valueInput.match(pattern) && valueInput > 0) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }


    this.checkSelect = function (selectID,spanID,message) {
        var indexOption = document.getElementById(selectID).selectedIndex;
        if (indexOption > 0) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = '';
            return true    
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = message;
        return false
    }

}