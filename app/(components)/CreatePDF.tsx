import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';

interface PdfDocumentProps {
    formData: any;
}

const PdfDocument = React.forwardRef<HTMLDivElement, PdfDocumentProps>(({ formData }, ref) => {
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Text>First Name: {formData.firstName}</Text>
                    <Text>Last Name: {formData.lastName}</Text>
                    <Text>Email: {formData.email}</Text>
                </View>
            </Page>
        </Document>
    );
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

const FormComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const pdfComponentRef = React.createRef<HTMLDivElement>();

    const handlePrint = useReactToPrint({
        content: () => pdfComponentRef.current,
    });

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {/* Form alanları burada olmalıdır */}
                <button type="submit" onClick={handlePrint}>
                    PDF Oluştur ve Yazdır
                </button>
            </form>
            <PdfDocument ref={pdfComponentRef} formData={formData} />
        </div>
    );
};

export default FormComponent;
