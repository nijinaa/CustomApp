// Define custom button for Sales Order list view
frappe.listview_settings['Sales Order'].button = {
    // Function to determine whether the button should be shown
    show(doc) {
        return true; // Always show the button
    },
    // Function to generate the label for the button
    get_label() {
        return `<i class="fa fa-eye"></i> `; // Icon added to the label
    },
    // Function to provide a description for the button
    get_description(doc) {
        return __('Show Preview'); // Description for the button
    },
    // Function defining the action to be performed when the button is clicked
    action(doc) {
        console.log(doc); // Log the document to the console
        // Create a dialog to display Sales Order details
        let dialog = new frappe.ui.Dialog({
            fields: [
                // Field for Sales Order ID
                {'fieldname': 'name', 'fieldtype': 'Data', 'label': 'ID', 'default': doc.name, "read_only": 1},
                // Field for Sales Order type
                {'fieldname': 'order_type', 'fieldtype': 'Select', 'label': 'Order Type', 'default': doc.order_type, "read_only": 1},
            ]
        });
        dialog.show(); // Show the dialog
    }
}
