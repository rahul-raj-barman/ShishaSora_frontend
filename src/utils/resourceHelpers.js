function readableValue(value) {
  if (value === null || value === undefined || value === "") {
    return "—";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (typeof value === "object") {
    return (
      value.fullName ||
      value.name ||
      value.code ||
      value.studentId ||
      value.email ||
      value.referenceNumber ||
      "Linked"
    );
  }

  return String(value);
}

export function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatValue(item, column) {
  return readableValue(item[column]);
}

export function toOptions(items, labelKeys = ["name", "fullName", "code", "studentId"]) {
  return items.map((item) => {
    const label =
      labelKeys.map((key) => item[key]).find(Boolean) ||
      item.email ||
      item._id;

    return {
      value: item._id,
      label,
    };
  });
}
