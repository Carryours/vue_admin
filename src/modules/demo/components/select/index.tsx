import { Component, Vue } from "vue-property-decorator";
import { Select } from "ant-design-vue";
type optionType = {
  value: string;
  label: string;
  disabled: boolean;
};

@Component({
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
    ASelectOptGroup: Select.OptGroup
  }
})
export default class SelectDemo extends Vue {
  private options: Array<optionType> = [
    { value: "jack", label: "Jack", disabled: false },
    { value: "lucy", label: "lucy", disabled: false },
    { value: "disabled", label: "disabled", disabled: false },
    { value: "Yiminghe", label: "Yiminghe", disabled: false }
  ];
  private value: string = "lucy";
  private handleChange(value: string) {
    this.value = value;
    if (value === "Yiminghe") {
      this.options[0].disabled = true;
      // this.$forceUpdate();
    } else {
      this.options[0].disabled = false;
    }
  }
  created() {}
  render(h: typeof Vue.prototype.$createElement) {
    return (
      <div>
        <a-select
          // defaultValue="lucy"
          style="width: 120px"
          value={this.value}
          onChange={this.handleChange}
        >
          {this.options.map(item => {
            return (
              <a-select-option
                value={item.value}
                disabled={item.disabled}
                key={item.value}
              >
                {item.label}
              </a-select-option>
            );
          })}
        </a-select>
        <a-select
          labelInValue={true}
          // mode="tags"
          mode="multiple"
          style="minWidth: 300px"
          onChange={(value: string) => {
            console.log(value);
          }}
          placeholder="Tags Mode"
        >
          {(() => {
            let l = [];
            for (let i = 0; i < 10; i++) {
              let key = (i + 9).toString(36) + i;
              l.push(
                <a-select-option key={key} value={i + ""}>
                  {key}
                </a-select-option>
              );
            }
            return l;
          })()}
        </a-select>
        <a-select
          defaultValue="lucy"
          style="minWidth: 200px"
          mode="tags"
          allowClear
        >
          <a-select-opt-group>
            <span slot="label">
              <a-icon type="user" />
              Manager
            </span>
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select-opt-group>
          <a-select-opt-group label="Engineer">
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>
    );
  }
}
