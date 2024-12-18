"use client";
import Accordion from "react-bootstrap/Accordion";
import "./Accordion.scss";
import Image from "next/image";

interface AccordionCusProps {
    header?: string;
    items?: string[];
}

const AccordionCustom: React.FC<AccordionCusProps> = ({
    header,
    items = [],
}) => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <div className="accordion-item__wrapper">
                        <Image
                            src="/images/box-open.svg"
                            alt="Products Icon"
                            width={16}
                            height={16}
                        />
                        <span className="accordion-item">{header}</span>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default AccordionCustom;
