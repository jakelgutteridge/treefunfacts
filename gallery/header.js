// Get references to the header and footer divs
const headerDiv = document.getElementById('header');

// Define the injected HTML content for the gallery header
const headerHTML = `
<center>
  <table cellpadding="0" cellspacing="0" style="margin-top: 24px;">
    <tr>
      <td>

        <table cellspacing="4" style="float: left; margin-right: 8px; margin-left: 8px; background-color: #6aad0e; font-weight: bold;">
          <tr>
            <td>
              <a href="#" style="color: #ffffff;">General Photos</a>
            </td>
          </tr>
        </table>

        <table cellspacing="4" style="float: left; margin-right: 8px; margin-left: 8px;">
          <tr>
            <td>
              <a href="#" style="color: #000000;">Historic Photos</a>
            </td>
          </tr>
        </table>

        <table cellspacing="4" style="float: left; margin-right: 8px; margin-left: 8px;">
          <tr>
            <td>
              <a href="#" style="color: #000000;">Art Work</a>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</center>
`;

// Inject the HTML content into the gallery header div
headerDiv.innerHTML = headerHTML;
