document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".edit-btn");
  const modal = document.getElementById("editModal");
  const closeModalButtons = document.querySelectorAll(".close-modal-btn");
  const saveChangesBtn = document.getElementById("saveChangesBtn");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const title = button.getAttribute("data-title");
      const price = button.getAttribute("data-price");
      const status = button.getAttribute("data-status");

      document.getElementById("productId").value = id;
      document.getElementById("productTitle").value = title;
      document.getElementById("productPrice").value = price;
      document.getElementById("productStatus").value = status;

      modal.classList.remove("hidden");
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });

  saveChangesBtn.addEventListener("click", (event) => {
    const id = document.getElementById("productId").value;
    const title = document.getElementById("productTitle").value;
    const price = document.getElementById("productPrice").value;
    const status = document.getElementById("productStatus").value;

    editForm.action = `/admin/products/edit/${encodeURIComponent(
      id
    )}/${encodeURIComponent(title)}/${encodeURIComponent(
      price
    )}/${encodeURIComponent(status)}?_method=PATCH`;

    editForm.submit();
  });
});

const deleteButtons = document.querySelectorAll("[btn-delete]");
if (deleteButtons) {
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();

      const isConfirmed = confirm(
        "Are you sure you want to delete this product?"
      );
      if (isConfirmed) {
        const id = button.getAttribute("data-id");
        const form = document.createElement("form");
        form.method = "POST";
        form.action = `/admin/products/delete/${id}?_method=DELETE`;

        document.body.appendChild(form);
        form.submit();
      }
    });
  });
}
