export function showToast(message: string, duration: number = 3000): void {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");

    setTimeout(() => {
      toast.classList.remove("opacity-100");
      toast.classList.add("opacity-0");

      setTimeout(() => {
        toast.classList.add("hidden");
      }, 300); // matches the transition duration
    }, duration);
  } else {
    console.error("Toast or toast message element not found");
  }
}
