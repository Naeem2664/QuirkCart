import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Return_Policy() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css"
        integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-lg-12 col-xl-12">
            <div class="">
              <div class="tab-content">
                <div class="tab-pane show active" id="about-me">
                  <h2 class="mb-4 text-uppercase">Our Return Policy</h2>
                  <p>
                    We offer refund and/or exchange within the first 14 days of
                    your purchase, if 14 days have passed since your purchase,
                    you will not be offered a refund and/or exchange of any
                    kind.
                  </p>
                  <ul class="list-unstyled timeline-sm">
                    <li class="timeline-sm-item">
                      <h5 class="mt-0 mb-1">
                        Eligibility for Refunds and Exchange
                      </h5>
                      <ol>
                        <li style={{ listStyleType: "square" }}>
                          Your item must be unused and in the same condition
                          that you received it.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          The item must be in the original packaging.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          To complete your return, we require a receipt or proof
                          of purchase.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          Only regular priced items may be refunded, sale items
                          cannot be refunded.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          If the item in question was marked as a gift when
                          purchased and shipped directly to you, you will
                          receive a gift credit for the value of your return.
                        </li>
                      </ol>
                    </li>
                    <li class="timeline-sm-item">
                      <h5 class="mt-0 mb-1">
                        Exchange (
                        <i style={{ fontWeight: "lighter" }}>If Applicable</i>)
                      </h5>
                      <p>
                        We only replace items if they are defective or damaged.
                        If you need to exchange it for the same item, send us an
                        email at{" "}
                        <u>
                          <b>faltooswag@gmail.com</b>
                        </u>{" "}
                        and send your item to: <b>Nearest Warehouse</b>.
                      </p>
                    </li>
                    <li class="timeline-sm-item">
                      <h5 class="mt-0 mb-1">
                        Partial Refunds are Granted (
                        <i style={{ fontWeight: "lighter" }}>If Applicable</i>)
                      </h5>
                      <ol>
                        <li style={{ listStyleType: "square" }}>
                          Any item not in its original condition, is damaged or
                          missing parts for reasons not due to our error.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          Any item that is returned more than 30 days after
                          delivery.
                        </li>
                      </ol>
                      <br></br>
                      <p>
                        Once your return is received and inspected, we will send
                        you an email to notify you that we have received your
                        returned item. We will also notify you of the approval
                        or rejection of your refund.
                      </p>
                      <p>
                        If you are approved, then your refund will be processed,
                        and a credit will automatically be applied to your
                        credit card or original method of payment, within a
                        certain amount of days.
                      </p>
                    </li>
                    <li class="timeline-sm-item">
                      <h5 class="mt-0 mb-1">Late or missing refunds</h5>
                      <ol>
                        <li style={{ listStyleType: "square" }}>
                          If you have not received a refund yet, first check
                          your bank account again. Then contact your credit card
                          company, it may take some time before your refund is
                          officially posted.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          If you have done all of this and you still have not
                          received your refund yet, please contact us at{" "}
                          <a href="">
                            <u>
                              <b>faltooswag@gmail.com</b>
                            </u>
                          </a>
                        </li>
                      </ol>
                    </li>
                    <li class="timeline-sm-item">
                      <h5 class="mt-0 mb-1">Shipping</h5>
                      <ol>
                        <li style={{ listStyleType: "square" }}>
                          Please do not send the product back to the
                          manufacturer.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          You will be responsible for paying for your own
                          shipping costs for returning your item.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          Shipping costs are non-refundable! If you receive a
                          refund, the cost of return shipping will be deducted
                          from your refund.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          Depending on where you live, the time it may take for
                          your exchanged product to reach you, may vary.
                        </li>
                        <li style={{ listStyleType: "square" }}>
                          Please see, we cannot guarantee that we will receive
                          your returned item
                        </li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Return_Policy;
