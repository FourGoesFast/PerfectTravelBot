import json

new_data = {}
with open("data.json") as raw_data:
    old_data = json.load(raw_data)


def get_distance(offset):
    x, y = offset.split(" ")
    true_x, true_y = int(x) * 16, int(y) * 16
    d = round(((true_x**2) + (true_y**2))**0.5)
    return f"{x} {y} [{d}]"


for angle, offsets in old_data.items():
    new_offsets = []
    for offset in offsets:
        new_offsets.append(get_distance(offset) if offset != "" else "")
    new_data[angle] = new_offsets

with open('dataWithDistance.json', 'w') as f:
    json.dump(new_data, f)
