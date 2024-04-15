"use client";
import React from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  Input,
  Label,
  Radio,
  Select,
} from "../_components/pure/utils";

function page() {
  return (
    <div className="flex flex-col p-5 space-y-6">
      <div>
        <Button className="bg-slate-300 p-3 rounded-xl shadow-lg">
          Button
        </Button>
      </div>
      <div>
        <FormGroup
          className="flex space-x-4"
          label={"Checkbox"}
          formField={<Checkbox />}
        />
      </div>
      <div>
        <FormGroup
          className="flex space-x-4"
          label={"Radio"}
          formField={<Radio />}
        />
      </div>
      <div>
        <FormGroup
          className="flex space-x-4"
          label={<Label>Input Field</Label>}
          formField={<Input className="bg-slate-100 border p-2" />}
        />
      </div>
      <div>
        <FormGroup
          className="flex space-x-4"
          label={<Label>Select Field</Label>}
          formField={
            <Select className="bg-slate-100 border p-2">
              <option value="one">Apple</option>
              <option value="two">Pine Apple</option>
            </Select>
          }
        />
      </div>
    </div>
  );
}

export default page;
