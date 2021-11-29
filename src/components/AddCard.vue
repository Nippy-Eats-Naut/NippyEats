<template>
    <div>
        <div class="modal fade" id="AddCard" tabindex="-1" aria-labelledby="AddCard" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content py-3 px-5">
                    <div class="modal-header border-0 align-items-baseline">
                        <div>
                            <p class="mb-0">Add Credit/Debit Card</p>
                        </div>
                        <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <div class="form-floating">
                                <input type="number" class="form-control" id="cardnum" placeholder="name@example.com">
                                <label for="cardnum">Card Number</label>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="date" class="form-control" id="exdate" placeholder="name@example.com">
                                    <label for="exdate">Expiry Date</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="cvv" placeholder="name@example.com">
                                    <label for="cvv">CVV</label>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid justify-content-center">
                            <button class="btn btn-primary text-white mb-3">Add card</button>
                            <button type="button" class="btn text--orange" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddCard'
}
</script>