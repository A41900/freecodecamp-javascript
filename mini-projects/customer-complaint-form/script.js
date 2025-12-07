const validators = {
    "full-name": isNameValid,
    "email": isEmailValid,
    "order-no" : isOrderNrValid,
    "product-code": isProductCodeValid,
    "quantity": isQuantityValid,
    "complaints-group": isComplaintsGroupValid,
    "complaint-description": isComplaintDescValid,
    "solutions-group":isSolutionsGroupValid,
    "solution-description": isSolutionsDescValid
};

function setListeners() {
    for (const id in validators) {
        const element = document.getElementById(id);
        element.addEventListener("change", () => {
            const isValid = validators[id]();
            element.style.borderColor = isValid ? "green" : "red";
        });
    }

}

function validateForm() {
  const result = {};
  for (const id in validators) {
    result[id] = validators[id]();
  }
  return result;
}

function isValid(form){
  return Object.values(form).every(value => value === true);
}

/** - FULL NAME - #full-name is not empty.*/
function isNameValid() {
    return document.getElementById("full-name").value.trim() !== "";
}

/** - EMAIL - #email is a valid email address format. */
function isEmailValid() {
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/;
    const email = document.getElementById("email").value.trim();
    return emailRegex.test(email);
}

/** - NR ORDER - #order-no is a sequence of ten numbers starting with 2024*/
function isOrderNrValid() {
    const orderRegex = /^2024[\d]{6}$/;
    const orderNr = document.getElementById("order-no").value.trim();
    return orderRegex.test(orderNr);
}

/** - PRODUCTS CODE - #product-code follows the pattern XX##-X###-XX#, where X represents either a lowercase letter or an uppercase letter and # represents a number.*/
function isProductCodeValid() {
    const productRegex = /^[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d$/i;
    const productCode = document.getElementById("product-code").value.trim();
    return productRegex.test(productCode);
}

/** - QUANTITY - #quantity is a positive integer. */
function isQuantityValid() {
    const quantity = Number(document.getElementById("quantity").value.trim());
    return Number.isInteger(quantity) && quantity>0;
}


/** - COMPLAINTS GROUP - at least one checkbox from #complaints-group is checked. */
function isComplaintsGroupValid() {
    const complaintsGroup = document.getElementById("complaints-group");
    const checked = complaintsGroup.querySelectorAll('input[type="checkbox"]:checked');
    return checked.length > 0;
}
/** - COMPLAINTS DESCRIPTION - #complaint-description contains at least twenty characters if the Other checkbox is checked. */
function isComplaintDescValid() {
    const desc = document.getElementById("complaint-description").value.trim();
    const otherChecked = document.getElementById("other-complaint").checked;
    if (!otherChecked) return true;
    return desc.length >= 20;
}


/** - SOLUTIONS GROUP - a radio button from #solutions-group is selected. */
function isSolutionsGroupValid() {
    const solutionsGroup = document.getElementById("solutions-group");
    const checked = solutionsGroup.querySelectorAll('input[type="radio"]:checked');
    return checked.length > 0;

}

/** - SOLUTIONS DESCRIPTION - #solution-description contains at least twenty characters if the Other radio button is selected.*/
function isSolutionsDescValid() {
    const solutionsDesc = document.getElementById("solution-description").value.trim();
    const otherChecked = document.getElementById("other-solution").checked;
        if (!otherChecked) {
        return true; 
    }
    return solutionsDesc.length >= 20;
}

setListeners();

document.getElementById("form").addEventListener("submit", (e) => {
    const formData = validateForm();
    if (!isValid(formData)) {
        e.preventDefault();
    }
});
