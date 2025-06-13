import prisma from "@/libs/prismadb";

import getCurrentUser from "./getCurrentUser";
import { PaymentTerm, Status } from "@prisma/client";

interface IParams {
  invoiceId?: string;
}

export default async function getInvoiceById(params: IParams) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return null;
    }

    //Je n'est pas fait un autre component pour les invoices statique, pour economiser du temps avec le copie paste, 
    // car je n'etais pas sur de avoir fini en 24h, donc je voulais faire le plus de taches possible !

    const invoices = [
        {
          id: "1",
          userId: "1",
          streetFrom: "tetst",
          cityFrom: "tetst",
          postCodeFrom: "tetst",
          countryFrom: "tetst",
          clientName: "tetst",
          clientEmail: "tetst",
          streetTo: "tetst",
          cityTo: "tetst",
          postCodeTo: "tetst",
          countryTo: "tetst",
          invoiceDate: new Date(),
          paymentTerm: PaymentTerm.NET1,
          description: "tetst",
          total: "tetst",
          status: Status.PAID,
          createdAt: new Date(),
          updatedAt: new Date(),
              items: []
        },
        {
              id: "2",
              userId: "1",
              streetFrom: "tetst2",
              cityFrom: "tetst2",
              postCodeFrom: "tetst2",
              countryFrom: "tetst2",
              clientName: "tetst2",
              clientEmail: "tetst2",
              streetTo: "tetst2",
              cityTo: "tetst2",
              postCodeTo: "tetst2",
              countryTo: "tetst2",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst2",
              total: "tetst2",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "3",
              userId: "1",
              streetFrom: "tetst3",
              cityFrom: "tetst3",
              postCodeFrom: "tetst3",
              countryFrom: "tetst3",
              clientName: "tetst3",
              clientEmail: "tetst3",
              streetTo: "tetst3",
              cityTo: "tetst3",
              postCodeTo: "tetst3",
              countryTo: "tetst3",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst3",
              total: "tetst3",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "4",
              userId: "1",
              streetFrom: "tetst4",
              cityFrom: "tetst4",
              postCodeFrom: "tetst4",
              countryFrom: "tetst4",
              clientName: "tetst4",
              clientEmail: "tetst4",
              streetTo: "tetst4",
              cityTo: "tetst4",
              postCodeTo: "tetst4",
              countryTo: "tetst4",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst4",
              total: "tetst4",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "5",
              userId: "1",
              streetFrom: "tetst5",
              cityFrom: "tetst5",
              postCodeFrom: "tetst5",
              countryFrom: "tetst5",
              clientName: "tetst5",
              clientEmail: "tetst5",
              streetTo: "tetst5",
              cityTo: "tetst5",
              postCodeTo: "tetst5",
              countryTo: "tetst5",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst5",
              total: "tetst5",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "6",
              userId: "1",
              streetFrom: "tetst6",
              cityFrom: "tetst6",
              postCodeFrom: "tetst6",
              countryFrom: "tetst6",
              clientName: "tetst6",
              clientEmail: "tetst6",
              streetTo: "tetst6",
              cityTo: "tetst6",
              postCodeTo: "tetst6",
              countryTo: "tetst6",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst6",
              total: "tetst6",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "7",
              userId: "1",
              streetFrom: "tetst7",
              cityFrom: "tetst7",
              postCodeFrom: "tetst7",
              countryFrom: "tetst7",
              clientName: "tetst7",
              clientEmail: "tetst7",
              streetTo: "tetst7",
              cityTo: "tetst7",
              postCodeTo: "tetst7",
              countryTo: "tetst7",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst7",
              total: "tetst7",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "8",
              userId: "1",
              streetFrom: "tetst8",
              cityFrom: "tetst8",
              postCodeFrom: "tetst8",
              countryFrom: "tetst8",
              clientName: "tetst8",
              clientEmail: "tetst8",
              streetTo: "tetst8",
              cityTo: "tetst8",
              postCodeTo: "tetst8",
              countryTo: "tetst8",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst8",
              total: "tetst8",
              status: Status.DRAFT,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "9",
              userId: "1",
              streetFrom: "tetst9",
              cityFrom: "tetst9",
              postCodeFrom: "tetst9",
              countryFrom: "tetst9",
              clientName: "tetst9",
              clientEmail: "tetst9",
              streetTo: "tetst9",
              cityTo: "tetst9",
              postCodeTo: "tetst9",
              countryTo: "tetst9",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst9",
              total: "tetst9",
              status: Status.PAID,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        },
        {
              id: "10",
              userId: "1",
              streetFrom: "tetst10",
              cityFrom: "tetst10",
              postCodeFrom: "test10",
              countryFrom: "tetst10",
              clientName: "tetst10",
              clientEmail: "tetst10",
              streetTo: "tetst10",
              cityTo: "tetst10",
              postCodeTo: "tetst10",
              countryTo: "tetst10",
              invoiceDate: new Date(),
              paymentTerm: PaymentTerm.NET7,
              description: "tetst10",
              total: "tetst10",
              status: Status.PENDING,
              createdAt: new Date(),
              updatedAt: new Date(),
              items: []
        }
      ] 

    const { invoiceId } = params;



   // const invoice = await prisma.invoice.findUnique({
     // where: {
     //   id: invoiceId,
    //  },
    //  include: {
     //   items: true,
    //  },
   // });

  //trouver le bon invoice avec le id du parametre
   
   const invoice = invoices.find(
    (invoice) => invoice.id === invoiceId && invoice.userId === currentUser.id
   )

    if (!invoice) {
      return null;
    }

    if (invoice.userId !== currentUser.id) {
      return null;
    }

    return {
      ...invoice,
      invoiceDate: invoice.invoiceDate.toString(),
      createdAt: invoice.createdAt.toString(),
      updatedAt: invoice.updatedAt.toString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
