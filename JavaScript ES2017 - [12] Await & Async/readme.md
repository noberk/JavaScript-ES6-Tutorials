    createTableStrings2(data) {

        var template = `
        <table>
        <% data.forEach(row => {      %>
                <tr>
                    <%  for (const key in row) { %>
                        <td><%= row[key] %></td>
                    <%  } %>
                </tr>
        <% }) %>
        </table>
        `;

        this.combine(template)

    }