const infoPopup = (props ) => (
    `<span class="icon-marker">
    <span class="icon-marker-tooltip">
      <h2>${props.country}</h2>
      <ul>
        <li><strong>Confirmed:</strong> ${props.cases}</li>
        <li><strong>Deaths:</strong> ${props.deaths}</li>
        <li><strong>Recovered:</strong> ${props.recovered}</li>
        <li><strong>Last Update:</strong> ${props.updatedFormatted}</li>
      </ul>
    </span>
    ${ props.casesString }
  </span>`
);

export default infoPopup;