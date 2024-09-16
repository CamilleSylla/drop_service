import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  // PRODUCTS
  const linkedin = await prisma.product.create({
    data: {
      name: "LinkedIn",
      slug: "linkedin",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis malesuada felis, a tempor velit interdum a.",
      description: `# **Product Name: Amazing Gadget Pro**

![Amazing Gadget Pro](https://via.placeholder.com/600x400.png?text=Product+Image)

---

## **Overview**

The **Amazing Gadget Pro** is a revolutionary device designed to make your life easier. Whether you're at home or on the go, this gadget will enhance your productivity and simplify everyday tasks. Compact, durable, and stylish, it's the must-have accessory for tech enthusiasts.

---

## **Key Features**

- **Ergonomic Design:** Comfortable and easy to hold for extended use.
- **High Performance:** Powered by a cutting-edge processor to ensure seamless operation.
- **Long Battery Life:** Up to 48 hours of battery life with fast-charging support.
- **Wireless Connectivity:** Bluetooth 5.0 for fast and stable connections.
- **Multiple Colors:** Available in Black, Silver, and Rose Gold.

---

## **Technical Specifications**

| Feature              | Details                                     |
|----------------------|---------------------------------------------|
| **Dimensions**        | 150mm x 75mm x 10mm                         |
| **Weight**            | 200g                                        |
| **Battery**           | 4000mAh, supports wireless charging         |
| **Display**           | 6.5" Full HD AMOLED                         |
| **Processor**         | Quad-core 2.0GHz                            |
| **Memory**            | 8GB RAM, 128GB internal storage             |
| **Connectivity**      | Bluetooth 5.0, Wi-Fi 6, USB-C, NFC          |
| **Operating System**  | Android 12                                  |

---

## **What's in the Box?**

- 1x Amazing Gadget Pro
- 1x USB-C Charging Cable
- 1x Power Adapter
- 1x User Manual
- 1x Warranty Card (1 Year)

---

## **Customer Reviews**

> ⭐⭐⭐⭐⭐ “The Amazing Gadget Pro has changed the way I manage my daily tasks. Highly recommend!” — Jane D.

> ⭐⭐⭐⭐ “Great device, sleek design, though it could be a bit lighter.” — John M.

---

## **Pricing**

- **Price:** $499.99
- **Discount:** Save 10% when you purchase before [Date]
- **Free Shipping:** Available on orders above $50

---

## **Frequently Asked Questions**

### **Q: Does this device support 5G?**
A: Yes, the Amazing Gadget Pro supports 5G connectivity.

### **Q: Is the gadget water-resistant?**
A: Yes, it has an IP68 rating, meaning it's resistant to dust and water up to 1.5 meters for 30 minutes.

---

## **Order Now**

Ready to enhance your life with the **Amazing Gadget Pro**? [**Order here!**](#)

---

## **Contact Us**

For further inquiries, reach out to our support team at support@amazinggadgets.com.
`,
      price: 10.55,
      type: "LINKEDIN",
      config: { keys: ["hdy-gdsvg-vgdevte-vdgv-vdge"] },
      categories: {
        create: {
          name: "Social Media",
          slug: "social-media",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
