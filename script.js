
document.getElementById("admissionForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your application form is ready.");
    
    this.reset();
});
