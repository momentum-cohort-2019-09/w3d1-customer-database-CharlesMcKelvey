// const capitalize = str => str[0].toUpperCase() + str.slice(1)

function customerToHtml(customer) {
    return `
    <div class="customerCard">
        <img class="customerImg" src="${customer.picture.large}" alt="${customer.name.first + " " + customer.name.last}">
        <div class="name">${customer.name.first + " " + customer.name.last}</div>
        <div class="email">${customer.email}</div>
        <div class="address">${customer.location.street + " " + customer.location.city + " " + nameToAbbr(customer.location.state) + " " + customer.location.postcode}</div>
        <div class="dateOfBirth">Date of Birth: ${moment(customer.dob).format('MMM Do YYYY')}</div>
        <div class="customerSince">Customer Since: ${moment(customer.registered).format('MMM Do YYYY')}</div>
    </div>
  `
}

document.querySelector('#container').innerHTML = customers.map(customerToHtml).join('\n')
