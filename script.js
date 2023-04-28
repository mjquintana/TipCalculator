document.getElementById("tipCalc").onclick = function() {
    calculateTip();
    }
  
    function calculateTip() {
      let totalCost = document.getElementById("totalCost").value;
      let service = document.getElementById("service").value;
      let numPeople = document.getElementById("people").value;
    
        if(totalCost == "") {
        alert("Invalid Input")
      return
      }
      let total = (totalCost * service) / numPeople
      total = total.toFixed(2);
      document.getElementById("totaltip").innerText = total;
      $('#exampleModal').modal('show');
    }
