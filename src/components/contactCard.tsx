

export interface ContactCardProps {
    icon: React.ComponentType<{ className?: string }>;
    head: string;
    type: 'mail' | 'tel' | 'link';
    value: string;
}
const ContactCard = ({ icon: Icon, head, type, value }: ContactCardProps) => {

    return (
        <div className="flex flex-1 gap-4 bg-card rounded-lg p-4">
            {Icon && <Icon className="text-themeGold text-xl" />}
            <div>
                <p className="capitalize">{head}</p>
                {type === 'mail' && (<a href={`mailto:${value}`} className="font-semibold">{value}</a>)}
                {type === 'tel' && (<a href={`tel:${value}`} className="font-semibold">{value}</a>)}
                {type === 'link' && (<a href={value} className="font-semibold">{value}</a>)}
            </div>
        </div>
    )
}

export default ContactCard;