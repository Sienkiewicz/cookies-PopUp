import { VendorType } from './types'
export const CustomInput = (ven: VendorType): string =>
  `
        <div class='form-input'>
                <input type="checkbox" id=${ven.id} name=${ven.id} checked>
                <label for=${ven.id}> ${ven.name}, LINK: <a
            href=${ven.policyUrl}
            title=${ven.name}
            class="w3-hover-text-green"
            >${ven.policyUrl}</a
            > </label>
            </div>
            `
