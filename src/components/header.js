
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = date;

  const headerTitle = document.createElement('h1');
  headerTitle.textContent = title;

  const headerTemp = document.createElement('span');
  headerTemp.classList.add('temp');
  headerTemp.textContent = temp;

  const headerArr = [headerDate, headerTitle, headerTemp];
  headerArr.forEach(element => {
    headerDiv.appendChild(element);
  })
  return headerDiv
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const query = document.querySelector(`div${selector}`);
  query.appendChild(Header('Lambda News', '4/18/21', '61 degrees'))
}

export { Header, headerAppender }
