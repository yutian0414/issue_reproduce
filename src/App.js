
import './App.css';
import * as React from "react";
import { Form, TreeSelect, Input, Divider } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const { TreeNode } = TreeSelect;

const { useState, useCallback } = React;

const SelectFormComponent = (props) => {
    const [form] = Form.useForm();
    return (
        <Form form={form}>
            <Form.Item
                name="component"
                initialValue={[
                    { value: "a", label: "a-label" },
                    { value: "b", label: "b-label" }
                ]}
                label="选择组件"
            >
                <SelectComponent form={form} />
            </Form.Item>
        </Form>
    );
};

const SelectComponent = (props) => {
    const { form, value, onChange } = props;
    const [keyword, setKeyword] = useState("abc");
    const keywordChange=useCallback((e) => setKeyword(e.target.value), [])
    return (
        <TreeSelect
            defaultValue={value}
            style={{ width: "100%" }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            placeholder="Please select"
            onChange={(e) => {
                console.log(e);
                onChange(e);
            }}
            multiple
            labelInValue
            dropdownRender={(menu) => (
                <div>
                    <div style={{ display: "flex", flexWrap: "nowrap", padding: 8 }}>
                        <Input
                            style={{ flex: "auto" }}
                            value={keyword}
                            onChange={keywordChange}
                        />
                    </div>
                    <Divider style={{ margin: "4px 0" }} />
                    {menu}
                </div>
            )}
        >
            <TreeNode value="parent 1" title="parent 1">
                <TreeNode value="parent 1-0" title="parent 1-0">
                    <TreeNode value="leaf1" title="my leaf" />
                    <TreeNode value="leaf2" title="your leaf" />
                </TreeNode>
                <TreeNode value="parent 1-1" title="parent 1-1">
                    <TreeNode value="sss" title={<b style={{ color: "#08c" }}>sss</b>} />
                </TreeNode>
            </TreeNode>
        </TreeSelect>
    );
};


export default SelectFormComponent;
